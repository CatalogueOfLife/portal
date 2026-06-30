// Dataset-level feedback button + modal for /data/dataset/[key].
//
// Mirrors the taxon Feedback button (col-browser's src/Taxon/Feedback.js) but
// lives in the portal (the SSR dataset page chose to host it here rather than
// inside the SourceDataset island). It POSTs to the public CLB endpoint
//   POST {api}/dataset/{projectKey}/source/{sourceKey}/feedback
// which opens a GitHub issue in CatalogueOfLife/data and returns its URL.
//
// The endpoint is public and must NOT receive Basic-Auth credentials, so this
// fetch never sends an Authorization header (even on gated preview/dev).
import { useState } from 'react';

interface Props {
  /** project or release key the source belongs to (path {key}) */
  projectKey: string;
  /** source dataset key the feedback is about (path {id}) */
  sourceKey: string;
  /** CLB API base, e.g. https://api.checklistbank.org */
  api: string;
}

type Status = 'idle' | 'sending';

export default function DatasetFeedbackIsland({ projectKey, sourceKey, api }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [issueUrl, setIssueUrl] = useState<string | null>(null);

  const reset = () => {
    setStatus('idle');
    setMessage('');
    setEmail('');
    setError(null);
    setIssueUrl(null);
  };
  const close = () => {
    setOpen(false);
    reset();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch(`${api}/dataset/${projectKey}/source/${sourceKey}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, email: email || null }),
      });
      if (!res.ok) {
        let msg = `Request failed (${res.status})`;
        try {
          const body = await res.json();
          if (body?.message) msg = body.message;
        } catch {
          /* non-JSON error body */
        }
        throw new Error(msg);
      }
      // endpoint returns the issue URL as a JSON string (or a Location header)
      const text = (await res.text()).trim();
      const url = text ? text.replace(/^"|"$/g, '') : res.headers.get('Location');
      setIssueUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="ds-feedback">
      <button type="button" className="ds-feedback__btn" onClick={() => setOpen(true)}>
        Feedback
        <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{ marginLeft: 5 }}>
          <path d="M2 2h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6l-3 3v-3H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        </svg>
      </button>

      {open && (
        <div className="ds-feedback__overlay" role="dialog" aria-modal="true" aria-label="Feedback" onClick={close}>
          <div className="ds-feedback__modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-feedback__head">
              <h3>Feedback</h3>
              <button type="button" className="ds-feedback__x" aria-label="Close" onClick={close}>
                ×
              </button>
            </div>

            {issueUrl ? (
              <div className="ds-feedback__body">
                <p>
                  Thank you, your feedback was saved. You can follow progress and discuss further{' '}
                  <a href={issueUrl} target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form className="ds-feedback__body" onSubmit={submit}>
                <p>
                  We will create a{' '}
                  <a href="https://github.com/CatalogueOfLife/data/issues" target="_blank" rel="noopener noreferrer">
                    GitHub issue
                  </a>{' '}
                  for this source dataset which you can monitor or use to discuss further with us.
                </p>
                {error && <div className="ds-feedback__error">{error}</div>}
                <label>
                  Message
                  <textarea
                    rows={7}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoFocus
                  />
                </label>
                <label>
                  Email (optional)
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <div className="ds-feedback__actions">
                  <button type="button" className="ds-feedback__btn" onClick={close}>
                    Cancel
                  </button>
                  <button type="submit" className="ds-feedback__btn ds-feedback__btn--primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        .ds-feedback { display: flex; justify-content: flex-end; margin-top: 12px; }
        .ds-feedback__btn {
          display: inline-flex; align-items: center;
          font-size: 13px; line-height: 1; cursor: pointer;
          padding: 6px 12px; border: 1px solid #d9d9d9; border-radius: 2px;
          background: #fff; color: rgba(0,0,0,.85);
        }
        .ds-feedback__btn:hover { color: #cd7d39; border-color: #cd7d39; }
        .ds-feedback__btn--primary { background: #cd7d39; border-color: #cd7d39; color: #fff; }
        .ds-feedback__btn--primary:hover { background: #b96e30; color: #fff; }
        .ds-feedback__btn[disabled] { opacity: .6; cursor: default; }
        .ds-feedback__overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,.45);
          display: flex; align-items: flex-start; justify-content: center;
          padding: 8vh 16px;
        }
        .ds-feedback__modal {
          background: #fff; border-radius: 2px; width: 100%; max-width: 520px;
          box-shadow: 0 6px 24px rgba(0,0,0,.25); overflow: hidden;
        }
        .ds-feedback__head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px; border-bottom: 1px solid #f0f0f0;
        }
        .ds-feedback__head h3 { margin: 0; font-size: 16px; }
        .ds-feedback__x { border: 0; background: none; font-size: 22px; line-height: 1; cursor: pointer; color: rgba(0,0,0,.45); }
        .ds-feedback__body { padding: 18px; }
        .ds-feedback__body p { margin-top: 0; }
        .ds-feedback__body label { display: block; margin-bottom: 12px; font-size: 13px; }
        .ds-feedback__body textarea,
        .ds-feedback__body input {
          display: block; width: 100%; margin-top: 4px; box-sizing: border-box;
          padding: 6px 8px; border: 1px solid #d9d9d9; border-radius: 2px; font: inherit;
        }
        .ds-feedback__actions { display: flex; justify-content: flex-end; gap: 8px; }
        .ds-feedback__error {
          margin-bottom: 12px; padding: 8px 10px; border-radius: 2px;
          background: #fff2f0; border: 1px solid #ffccc7; color: #cf1322; font-size: 13px;
        }
      `}</style>
    </div>
  );
}

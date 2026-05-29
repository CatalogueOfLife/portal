// Build + deploy the Astro portal. Use with a "Pipeline script from SCM" job
// (or a multibranch pipeline). All the build/deploy logic lives in
// scripts/deploy.sh — this pipeline only supplies the two parameters and relies
// on the declarative default checkout to put the repo (and that script) in the
// workspace.
//
// These deploys are triggered manually: both parameters are entered per run,
// and Jenkins injects them as environment variables ($ENV, $PWD_PORTAL) that
// the script reads. PWD_PORTAL is a password parameter, so its value is masked
// in the build log.
//
// Agent requirements: docker, rsync, ssh (jenkins-deploy key), curl, jq.

pipeline {
  agent any

  parameters {
    choice(name: 'ENV', choices: ['dev', 'preview', 'prod'],
           description: 'Target environment to build and deploy.')
    password(name: 'PWD_PORTAL', defaultValue: '',
             description: 'Password for the read-only colportal CLB account (preview/dev auth + release lookup).')
  }

  options {
    disableConcurrentBuilds()
  }

  stages {
    stage('Build & deploy') {
      steps {
        sh './scripts/deploy.sh'
      }
    }
  }
}

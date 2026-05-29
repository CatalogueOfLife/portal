// Build + deploy the Astro portal. Use with a "Pipeline script from SCM" job
// (or a multibranch pipeline). All the build/deploy logic lives in
// scripts/deploy.sh — this pipeline only selects the environment and supplies
// the colportal password, then relies on the declarative default checkout to
// put the repo (and that script) in the workspace.
//
// These deploys are triggered manually: pick ENV per run. The read-only
// colportal CLB password (preview/dev auth + release lookup) comes from the
// Jenkins credential 'colportal-cred' (Secret text), bound to $PWD_PORTAL for
// scripts/deploy.sh and masked in the build log.
//   If 'colportal-cred' is instead a "Username with password" credential, swap
//   the binding for:
//     usernamePassword(credentialsId: 'colportal-cred',
//                      usernameVariable: 'COLPORTAL_USER', passwordVariable: 'PWD_PORTAL')
//   (deploy.sh hardcodes the "colportal" username, so only the password is used.)
//
// Agent requirements: docker, rsync, ssh (jenkins-deploy key), curl, jq.

pipeline {
  agent any

  parameters {
    choice(name: 'ENV', choices: ['dev', 'preview', 'prod'],
           description: 'Target environment to build and deploy.')
  }

  options {
    disableConcurrentBuilds()
  }

  stages {
    stage('Build & deploy') {
      steps {
        withCredentials([string(credentialsId: 'colportal-cred', variable: 'PWD_PORTAL')]) {
          sh './scripts/deploy.sh'
        }
      }
    }
  }
}

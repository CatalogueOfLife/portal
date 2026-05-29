// Build + deploy the Astro portal. Use with a "Pipeline script from SCM" job
// (or a multibranch pipeline). All the build/deploy logic lives in
// scripts/deploy.sh — this pipeline only supplies ENV and the colportal
// credential, and relies on the declarative default checkout to put the repo
// (and that script) in the workspace.
//
// Agent requirements: docker, rsync, ssh (jenkins-deploy key), curl, jq.
// Credential: a "Secret text" credential holding the read-only colportal
// password; set its ID in `credentialsId` below to match your Jenkins instance.

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
      environment {
        ENV = "${params.ENV}"
      }
      steps {
        withCredentials([string(credentialsId: 'colportal-readonly', variable: 'PWD_PORTAL')]) {
          sh './scripts/deploy.sh'
        }
      }
    }
  }
}


pipeline{
    agent any

    stages{
        stage('Checkout'){
            steps{
                //Jalar el proyecto de git
                git url: 'https://github.com/DarlingOlvera/sicei-pipeline.git',branch: 'dev'
                
            }
        }
        stage('Install dependencies and do tests'){
            steps{
                    sh 'npm install'
                    sh 'npm run test'  
            }
        }

        stage('Build docker image'){
            steps{
                script {
                    def branchName = env.GIT_BRANCH.replace('/','-')
                    def imageName = "sicei_express-${branchName}-${env.BUILD_NUMBER}"
                    docker.build(imageName,'--build-arg NODE_ENV=production .')
                    docker.image(imageName).run("-p 9000:8081")
                }
            }
        }

    }
}
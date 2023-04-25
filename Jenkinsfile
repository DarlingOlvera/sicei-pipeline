
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
                def imageName = "sicei_express:${env.BUILD_NUMBER}"
                docker.build(imageName, '--build-arg NODE_ENV=production .')
                docker.run("--name container:${env.BUILD_NUMBER} -p 8080:8080 ${imageName}")
                }
            }
        }

    }
}
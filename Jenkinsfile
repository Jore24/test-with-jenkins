pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.44.1-jammy'
        }
    }
    stages {
        stage('Test Docker Image') {
            steps {
                script {
                    // Ejecuta un comando simple dentro del contenedor
                    sh 'ls -la'
                }
            }
        }
        // Agrega más etapas aquí según sea necesario
    }
}

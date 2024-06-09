pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.44.1-jammy'
        }
    }
    stages {
        stage('Check Browsers') {
            steps {
                script {
                    // Verifica la presencia de los navegadores necesarios
                    sh 'playwright install'
                    sh 'playwright info'
                }
            }
        }
        // Agrega más etapas aquí según sea necesario
    }
}

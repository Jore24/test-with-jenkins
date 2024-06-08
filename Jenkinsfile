pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.44.1-jammy' } }
    tools {
        nodejs 'nodejs'
    }
    environment {
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1' // Para evitar que Playwright descargue automáticamente el navegador
    }
    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio desde GitHub
                git branch: 'main', url: 'https://github.com/Jore24/test-with-jenkins.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Instalar las dependencias utilizando npm
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Ejecutar las pruebas de Playwright
                sh 'npx playwright test'
            }
        }
    }
}

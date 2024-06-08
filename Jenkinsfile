pipeline {
    agent {
        docker {
            image 'playwright/chromium'
            // No es necesario especificar args para montar el directorio de trabajo en un Jenkins dockerizado
        }
    }
    
    tools {
        nodejs 'nodejs'
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

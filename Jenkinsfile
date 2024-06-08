pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }   

    stages {

         stage('Check Permissions') {
            steps {
                // Verificar los permisos ejecutando un comando simple
                sh 'echo "Jenkins tiene permisos suficientes"'
            }
        }

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

        stage('Install Browsers') {
            steps {
                // Instalar los navegadores requeridos por Playwright con sudo
                sh 'sudo npx playwright install'
            }
        }


        stage('Run Tests') {
            steps {
                // Ejecutar las pruebas de Playwright
                sh 'npx playwright test'
            }
        }

        // stage('Build and Deploy') {
        //     steps {
        //         // Construir y desplegar la aplicación (puedes ajustar esta parte según tus necesidades)
        //         sh 'npm run build'
        //         // Comando para desplegar la aplicación (por ejemplo, a un servidor remoto)
        //         // sh 'npm run deploy'
        //     }
        // }
    }
}

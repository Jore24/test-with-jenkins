pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio desde GitHub
                git 'https://github.com/Jore24/test-with-jenkins'
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

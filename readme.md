Passo 1: Verifique se seu TypeScript está instalado e sua versão deve ser 10.9.2 ou superior

Rode: npm tsc --version

Passo 2: Verifique se seu Node está instalado e sua versão deve ser 10.9.2 ou superior

Rode: npm node --version

Passo 3: Rode npm init -y. Aparecerá o documento package.json

Passo 4: Instale o typescript com uma dependência de sistema com o comando:

npm install --save-dev typescript

Passo 5: Verifique a versão do typescript

Rode: npx tsc --version

Passo 6: Configurando o arquivo tsconfig.json

Rode: npx tsc --init

Em seguida, aparecerá o documetno tsconfig.json, entre nele e descomente (Tire as //) das seguintes linhas:

    Elas estarão assim:
    // "rootDir": "./src",
    // "outDir": "./dist",

    Tire as duas barrinhas de cada linha e elas deverão ficar assim:
    "rootDir": "./src", (Linha 5)
    "outDir": "./dist", (Linha 6)

Passo 7: Crie a pasta 'src'

Rode: mkdir src

Execute esse comando na raiz da pasta de seu projeto

Passo 8: Pronto, agora é só falta criar seu arquivo .tsc e utilizar os comandos de compilar e rodar ele. Para isso, toda vez que você atualizar seu arquivo, execute esse comando:

    npx tsc

O arquivo será compilado para javascript (.js) e aparecerá na pasta 'dist', você deve rodar o arquivo que tem o nome de "nomedoseuarquivo.js", somente esse.

Pronto, seu c
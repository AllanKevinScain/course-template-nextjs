1. O projeto foi iniciado com `npx create-next-app --example with-stitches`. Seguindo a documentação do site oficial da stitches para poder usa-la configurada com o nextJS _https://stitches.dev/blog/using-nextjs-with-stitches_.
2. E então foi adicionado o `typescript`. Tive que seguir alguns passos do diego da Rocketseat, e cheguei a seguinte estrutura de arquivos:

```javascript
> .next
> nodeModules
> public
> src
  > components
  > pages
    > _app.tsx {
      import { AppProps } from "next/app";
      import "../../styles/globals.css";

      function MyApp({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />;
      }

      export default MyApp;
    }
    > _document.tsx {
      import Document, { Html, Head, Main, NextScript } from "next/document";

      export default class MyDocuments extends Document {
        render() {
          return (
            <Html>
              <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100&display=swap"
                  rel="stylesheet"
                />
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          );
        }
      }
    }
    > index.tsx {
      import { Button } from "../../styles/components";

      const App: React.FC = () => {
        return (
          <div
            style={{
              backgroundColor: "#e5e5e5",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button>Ola mundo</Button>
          </div>
        );
      };

      export default App;
    }
> styles
```

3. Configurando o ESLINT com as dicas da comunidade _https://blog.cod3r.com.br/organizacao-e-padronizacao-com-eslint/_. E também foram adicionadas configurações de outros projetos que já utilizei.

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'prettier', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/exports': 'error',
    'no-console': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^react', '^@react', '^[a-z]', '^@', '^[^.]', '^\\.']]
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never'
      }
    ]
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@core', 'osf-leo/src/core'],
          ['@libs', 'osf-leo/src/libs'],
          ['@plugins', 'osf-leo/src/plugins']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
};
```

4. E então foi seguido alguns exemplos da comunidade para configurar o prettier no projeto, começando neste site _https://acbjdesigner.com.br/2021/05/23/como-configurar-o-prettier-no-vs-code/_. Criando também o `.prettierignore`.
   OBS: Após instalar o eslint e o prettier, importante rodar o 'install'.
   OBS: a configuração "semi": true, comanda os pontos e virgulas no final de cada linha.

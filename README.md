# 8D - React JS Modal

A Super Light ReactJS Modal

```sh
npm i @octaldev/react-js-modal
```

### Conteúdo

- [Utilização Padrão](#utilização-padrão)

## Utilização Padrão

A primeira coisa a ser feita é instanciar o provider, assim:

```jsx
import React from "react";
import { ModalProvider, showModal } from "@octaldev/react-js-modal";
import MyModal from "./MyModal";

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            showModal("test");
        }, 3000);
    }, []);

    return (
        <ModalProvider>
            <MyModal name="test"/>
        </ModalProvider>
    )
}

export default App;
```

A prop ```name``` é **obrigatória** em todos os children do provider. Através dessa flag, que é possível identificar o modal a ser exibido.

E dentro de ```MyModal```, é possível extrair a função para fechar o modal:

```jsx
import React from "react";

const MyModal = ({ closeModal }) => (
    <div>
        <h1>Testando esse modal</h1>
        <button onClick={ closeModal }>Fechar modal</button>
    </div>
)

export default MyModal;
```

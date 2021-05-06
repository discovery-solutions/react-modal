# 8D - React Modal

A Super Light Modal for ReactJS and React Native Applications

```sh
npm i @octaldev/react-modal
```

### Conteúdo

- [Utilização Padrão](#utilização-padrão)

## Utilização Padrão

A primeira coisa a ser feita é instanciar o provider, como no exemplo abaixo.
É possível perceber que existem dois jeitos para declarar os componentes:

```js
import React from "react";
import { ModalProvider, showModal } from "@octaldev/react-modal";
import MyModal from "./MyModal";

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            showModal("test");
        }, 3000);
    }, []);

    return (
        <ModalProvider>
            <MyModal name="test"/> {/* Jeito 1 de declarar */}
            <Modal name="test" component={ MyModal }/> {/* Jeito 2 */}
        </ModalProvider>
    )
}

export default App;
```

A prop ```name``` é **obrigatória** em todos os children do provider. Através dessa flag, que é possível identificar o modal a ser exibido.

E dentro de ```MyModal```, é possível extrair a função para fechar o modal:

```js
import React from "react";

const MyModal = ({ closeModal }) => (
    <div>
        <h1>Testando esse modal</h1>
        <button onClick={ closeModal }>Fechar modal</button>
    </div>
)

export default MyModal;
```

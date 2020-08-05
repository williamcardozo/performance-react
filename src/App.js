import React, { Profiler } from 'react';
import { ExemploMemoScreen } from './screens'

function App() {

  function onRenderCallback(
    id, // o prop "id" da árvore Profiler que acabou de atualizar 
    phase, //  "mount" (se a árvore acabou de ser montada) ou "update" (se foi renderizada novamente)
    actualDuration, // tempo gasto renderizando a atualização enviada
    baseDuration, // tempo estimado para renderizar totalmente a subárvore sem memorização
    startTime, // quando o React começou renderizar essa atualização
    commitTime, // quando o React enviou essa atualização
    interactions // um Set de interações pertencentes â essa atualização
  ) {
    console.log(actualDuration)
  }

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <ExemploMemoScreen />
    </Profiler>
  );
}

export default App;

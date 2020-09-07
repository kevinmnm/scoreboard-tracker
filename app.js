let players = [
   {
      name: 'Kevin',
      score: 0,
      id: 0
   },
   {
      name: 'Guil',
      score: 0,
      id: 1
   },
   {
      name: 'Alex',
      score: 0,
      id: 2
   },
   {
      name: 'Lee',
      score: 0,
      id: 3
   }
];


class Header extends React.Component {
   render() {
      return (
         <h1 className='app-title'>Universal Scoreboard</h1>
      )
   }
}

function Board_header(){
   return (
      <div class='board-title-wrap'>
         <div>PLAYERS: {players.length}</div>
         <div>SCORE</div>
      </div>
   )
}

class Board_content extends React.Component {
   render() {
      return (

      )
   }
}


class Board extends React.Component {
   render() {
      return (
         <div className='board-wrap'>
            <Board_header></Board_header>
            
         </div>
      )
   }
}

class App extends React.Component {
   render() {
      return (
         <div>
            <Header></Header>
            <Board></Board>
         </div>
      )
   }
}

ReactDOM.render(
   <App></App>,
   document.querySelector('#app')
)


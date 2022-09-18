import './finance_App.css';
import cr from './files/cr.js'
import st from'./files/st.js'
function Finance_App() {
  return (
    <div className="App">
      <div className="App-header">
        Currency Converter and Stock Price Check
      </div>
      <div className='renderarea'>
              <div>{cr()}</div>
              <div>{st()}</div>
          </div>
          <footer className='foot'>
              AK
        </footer>
    </div>
  );
}

export default Finance_App;

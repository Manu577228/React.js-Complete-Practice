import './App.css';
import Icons from './components/Icons';
import ToastNotifications from './components/ToastNotifications';
import ModalExample from './components/ModalExample';
import ToolTip from './components/ToolTip';
import CountUpExample from './components/CountUpExample';
import IdleTimerContainer from './components/IdleTimerContainer';
import CreditCardExample from './components/CreditCardExample';
import DatePickerExample from './components/DatePickerExample';
import VideoPlayer from './components/VideoPlayer';
import LoadingIndicators from './components/LoadingIndicators';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';


function App() {
  return (
    <div className="App">
      {/* <Icons /> */}
      {/* <ToastNotifications /> */}
      {/* <ModalExample /> */}
      {/* <ToolTip /> */}
      {/* <CountUpExample /> */}
       {/* <IdleTimerContainer /> */}
       {/* <CreditCardExample /> */}
       {/* <DatePickerExample /> */}
       {/* <VideoPlayer /> */}
       {/* <LoadingIndicators /> */}
      <div className = 'Charts'>
       {/* <LineChart /> */}
       {/* <BarChart /> */}
       <DoughnutChart />
       </div>
    </div>
  );
}

export default App;

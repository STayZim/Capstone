const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-grey';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "auto", maxHeigth: "auto", borderStyle: "solid", borderWidth: "3em"}}>
        <div className="card-header" style={{fontSize: "36px", color: "maroon", background: "tan"}}>{props.header}</div>
        <div className="card-body" style={{background: "white"}}>
          {props.title && (<h5 className="card-title" style={{color: "brown"}}>{props.title}</h5>)}
          {props.text && (<p className="card-text" style={{color: "brown"}}>{props.text}</p>)}
          {props.body}
          {props.status && (<div style={{color:"brown", fontSize:"24px"}}id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
  );    
}

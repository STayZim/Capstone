function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');


  return (
    <Card
      bgcolor="transparent"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){ 
  return(<>
    <h4 style={{color:"brown"}}>Success!</h4>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus();
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  //const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
          try {
            const data = JSON.parse(text);
            props.setStatus(`Balance: $ ${data.balance}.00`);
            props.setShow(false);
            //setBalance(user.balance);           
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus()
            console.log('err:', text);
        }
    });
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}
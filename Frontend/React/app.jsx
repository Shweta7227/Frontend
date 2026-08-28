import { useState } from "react";
// function Profile(){
//     const name = "Shweta Sindhu";
//     return(
//         <div>
//             {/* `Hello ${name}` */}
//             <p>{`Hello ${name}`}</p>
//             <p>
//                Always keep Smiling  !!
//             </p>
//         </div>
//     );
// }

// export default Profile;
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

function Change() {
    // const [prev, curr] = useState(0);  this naming is incorrect curr
    const [prev, setPrev] = useState(0);
    return (
        <div>
            <h1>{`Starting value of counter ${prev}`}</h1>
            <button onClick={() => {
                if (prev < 10) {
                    // prev + 1  React doesn't know you want to update state unless you call the setter function:
                    setPrev(prev + 1);
                }
                else {
                    { `You hit the limit!!` }
                }

            }}>Increase</button>
            <button onClick={() => {
                if (prev > 0) {
                    prev - 1
                }
                else {
                    { `You hit the limit!!` }
                }}}> Decrease</button>
        </div >
    );
}
//Correction:
// import { useState } from "react";

function Changes() {
  const [prev, setPrev] = useState(0);

  return (
    <div>
      <h1>{`Starting value of counter ${prev}`}</h1>
      <button
        onClick={() => {
          if (prev < 10) {
            setPrev(prev + 1);
          } else {
            alert("You hit the limit!!");
          }
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (prev > 0) {
            setPrev(prev - 1);
          } else {
            alert("You hit the limit!!");
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Changes;

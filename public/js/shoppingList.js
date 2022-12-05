const addBTNs = document.querySelectorAll(".addBTN");

const addBtnHandler = async (event) => {
  event.preventDefault();


  const drinkID = event.target.getAttribute('data-id');

  if (drinkID) {
    const response = await fetch(`/api/drink/add`, {
      method: 'POST',
      body: JSON.stringify({ drinkID }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/memberProfile');
      alert("Drink Added");
    } else {
      alert('Failed to add drink');
    }
  }
};

// const delBtnHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };


addBTNs.forEach(addBTN => {addBTN.addEventListener('click', addBtnHandler)});


// document
//   .querySelector('.project-list')
//   .addEventListener('click', delBtnHandler);
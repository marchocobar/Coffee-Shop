// const addButtonHandler = async (event) => {

//     const name = document.querySelector('#drink-name');
//     const price = document.querySelector('#drink-price');
//     const description = document.querySelector('#drink-desc');
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/drink/save`, {
//             method: 'PUT',
//             body: JSON.stringify({ name, price, description }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });

//         if (response.ok) {
//             document.location.replace('/memberProfile');
//         } else {
//             alert('Failed to add drink');
//         }
//     }
// };

// document
//     .querySelector('.drink-list')
//     .addEventListener('click', addButtonHandler);
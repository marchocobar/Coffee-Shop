const removeBTNs = document.querySelectorAll(".removeBTN");

const delBtnHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/drink/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/memberProfile');
    } else {
      alert('Failed to delete project');
    }
  }
};


removeBTNs.forEach(delBTN => {delBTN.addEventListener('click', delBtnHandler)});
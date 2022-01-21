const image = document.querySelector('.image');
const paragraph = document.querySelector('.paragraph-wrapper');
const wrapper = document.querySelectorAll('.wrapper');

wrapper.forEach(row => {
  row.addEventListener('mouseover', function(){
    row.childNodes[1].classList.add('image-blur');
    // image[2].classList.add('active');
    // why when i try to add the classlist to the image only, its not changing brightness for both images ??
  })

  row.addEventListener('mouseout', function(){
    row.childNodes[1].classList.remove('image-blur');
    // image.classList.remove('active');
  })
})


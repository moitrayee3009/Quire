var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image'],

    // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  
    //['clean']                                         // remove formatting button

  ];

  
  
  quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions,
    },
    theme: 'snow'
  });

var btnSaveDelta = document.getElementById('btnSaveDelta');

btnSaveDelta.addEventListener('click', function() {
  
});


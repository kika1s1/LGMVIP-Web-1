const insertText = document.querySelector('.insert--text')
const saveBtn = document.querySelector('.save')
const listWrapper = document.querySelector('.list-wrapper')
const ITEMS = []

var list
saveBtn.addEventListener('click', () => {
    if (insertText.value) {
        ITEMS.push(insertText.value)
        createList(ITEMS,insertText.value )
    }
    insertText.value = ''
    
    
    
})

// create list items function
const createList = (ITEMS, enteredValue) => {
    if (ITEMS.length === 0 || localStorage.getItem('data')=== '') {
        list =document.createElement('li')
        list.classList.add('title--list')
        list.innerHTML = "No things to do"
        listWrapper.appendChild(list)

    }
    else  {
        if (ITEMS.length === 1) {
            listWrapper.innerHTML = ''
            list = document.createElement('li')
            list.classList.add('title--list')
            list.innerHTML = enteredValue
            let i = document.createElement('i')
            const classes = ['delete', 'fa', 'fa-trash']
            classes.forEach((cls) => {
                i.classList.add(cls)
            })
            
            list.appendChild(i)
            listWrapper.appendChild(list) 
            saveData()
        } else {
            list = document.createElement('li')
            list.classList.add('title--list')
            list.innerHTML = enteredValue
            let i = document.createElement('i')
            const classes = ['delete', 'fa', 'fa-trash']
            classes.forEach((cls) => {
                i.classList.add(cls)
            })
            
            list.appendChild(i)
            listWrapper.appendChild(list)
            saveData()
       
        }
    };
    
}

createList(ITEMS)
// delete and line-through functionality
listWrapper.addEventListener('click', (e) => {
    if (e.srcElement.classList[0] === 'delete') {
        console.log(e.target.parentElement.remove())
        saveData()
       
    }
    else if (e.srcElement.classList[0] === 'title--list') {
        e.srcElement.classList.toggle('overwrite')
        saveData()
    }
    
    // console.log(e.srcElement.classList)
})



// save data on local storage
function saveData() {
    localStorage.setItem('data', listWrapper.innerHTML)
}
function getData() {
    listWrapper.innerHTML = localStorage.getItem('data')
}
getData()
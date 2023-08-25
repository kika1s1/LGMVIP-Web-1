const insertText = document.querySelector('.insert--text')
const saveBtn = document.querySelector('.save')
const listItem = document.querySelector('.list')

const listWrapper = document.querySelector('.list-wrapper')

const ITEMS = []
var list
saveBtn.addEventListener('click', () => {
    if (insertText.value) {
        ITEMS.push(insertText.value)
        createList(ITEMS)
        
    }
    insertText.value = ''
    
    
})

console.log(ITEMS)
// create list items function
const createList = (ITEMS) => {
    if (ITEMS.length === 0) {
        list = `<ul class="list">
            <li class = "title--list"> No things to do </li>
        </ul>`
        listWrapper.innerHTML = list
    }
    else  {
        if (ITEMS.length === 1) {
            ITEMS.forEach(element => {
                list = `<ul class = "list" > 
            <li class="title--list"> ${element} <i class = "delete fa fa-trash" aria - hidden = "true" > </i> </li>
            </ul >
            `
                listWrapper.innerHTML = list
            }
            )
        } else {
            listWrapper.innerHTML = ''
            ITEMS.forEach(element => {
                list = `<ul class = "list" > 
            <li class="title--list"> ${element} <i class = "delete fa fa-trash" aria - hidden = "true" > </i> </li>
            </ul >
            `
                listWrapper.innerHTML += list
            }
            )

            
            
        }
    };
    
}

createList(ITEMS)





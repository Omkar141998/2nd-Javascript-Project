(function() {
  
    const form = document.querySelector('#msg-form')
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const msg = document.querySelector('#msg')
        const feedback = document.querySelector('.feedback')
        const Greeting = document.querySelector('.Greeting')

        if(msg.value === ''){
           feedback.classList.add('show')
           setTimeout(function() {
            feedback.classList.remove('show')
           }, 4000)
        }
        else{
            Greeting.textContent = msg.value
            msg.value = ''
        }

    })

})()
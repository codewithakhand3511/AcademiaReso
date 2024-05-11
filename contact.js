    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        var userName = document.querySelector(".box1").value;
        var phone = document.querySelector(".box2").value;
        var email = document.querySelector(".box3").value;
        var message = document.querySelector(".box4").value;
        var messageBody = "Name: " + userName + "<br/> Phone: " + phone + "<br/> Email: " + email + "<br/> Message: " + message;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "codewithakhand@gmail.com",
            Password: "3138928B65B8507E68E7A855B89819902003",
            To: 'akhand1044.be23@chitkarauniversity.edu.in',
            From: "codewithakhand@gmail.com",
            Subject: "This is the subject",
            Body: messageBody
        }).then(function (message) {
            if (message === 'OK') {
                swal("Success", "Your message has been sent!", "success");
                document.getElementById('contactForm').reset(); // Reset the form
            } else {
                swal("Error", "There was an error sending your message. Please try again later.", "error");
            }
        }).catch(function (error) {
            swal("Error", "There was an error sending your message. Please try again later.", "error");
            console.error('Email send error:', error);
        });
    });

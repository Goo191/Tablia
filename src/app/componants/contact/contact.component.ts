import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.app-form') as HTMLFormElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const contactInput = document.getElementById('contact') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;
    const sendButton = document.querySelector('.send-btn') as HTMLButtonElement;
    const cancelButton = document.querySelector('.reset-btn') as HTMLButtonElement;

    function validateForm(): boolean {
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return false;
        }
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            alert('Please enter a valid email.');
            return false;
        }
        if (contactInput.value.trim() === '') {
            alert('Please enter your contact number.');
            return false;
        }
        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            return false;
        }
        return true;
    }

    function validateEmail(email: string): boolean {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    sendButton.addEventListener('click', function (event: Event) {
        event.preventDefault(); // منع السلوك الافتراضي

        if (validateForm()) {
            alert('Message sent successfully!');
            form.reset(); // إعادة تعيين النموذج بعد النجاح
        }
    });

    cancelButton.addEventListener('click', function () {
        form.reset(); // إعادة تعيين النموذج
    });

    // تقييد المدخلات في خانة رقم الهاتف للأرقام فقط
    contactInput.addEventListener('input', function (event: Event) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/[^0-9]/g, ''); // استبدال أي شيء ليس رقمًا
    });
});
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.html',
  styleUrls: ['./data-form.scss']
})
export class DataForm {
  private http = inject(HttpClient);

  formData = {
    title: '',
    body: ''
  };

  isSending = false;

  onSubmit() {
    this.isSending = true;

    // Directing UI context payload to external mock service environment
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.formData)
      .subscribe({
        next: (serverAck) => {
          console.log('Server Save Confirmation Ack:', serverAck);
          alert('Success! Content posted to global API endpoint.');
          
          // Clear internal local model strings upon successful post confirmation
          this.formData = { title: '', body: '' };
          this.isSending = false;
        },
        error: (failContext) => {
          console.error('Server side processing rejected package:', failContext);
          this.isSending = false;
        }
      });
  }
}
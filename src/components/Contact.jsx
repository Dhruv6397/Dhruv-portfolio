
import './../styles/Contact.css';

export default function Contact() {
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...Object.fromEntries(formData) })
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className='contact-main-container'>
        <form className='contact-main' onSubmit={handleSubmit} method='POST' netlify>
          <input type='hidden' name='form-name' value='contact' />
          <div className='contact-item'>
            <strong className='contact-name-field'>Name</strong>
            <input className='contact-input' type='text' name='name' required />
          </div>

          <div className='contact-item'>
            <strong className='contact-name-field'>Email</strong>
            <input className='contact-input' type='email' name='email' required />
          </div>

          <div className='contact-item'>
            <strong className='contact-name-field'>Response</strong>
            <input className='contact-input' name='message' required />
          </div>

          <div className='contact-item'>
            <button className='contact-item-button' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

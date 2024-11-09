// Function to generate the resume
function generateResume() {
    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate resume content
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the resume in the output div
    const resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
}

// Add event listener to the button
document.getElementById("generateResume")?.addEventListener("click", generateResume);


const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

let profilePictureUrl: string | null = null;

// Event listener for file input change (file selection)
profilePictureInput.addEventListener('change', function (event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0]; // Get the selected file

    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file

        // On file read success, store the image URL
        reader.onload = function (e: ProgressEvent<FileReader>) {
            profilePictureUrl = e.target?.result as string;
        };

        // Read the file as a Data URL (base64)
        reader.readAsDataURL(file);
    }
});

// Event listener for the "Generate Resume" button click
generateResumeButton.addEventListener('click', function () {
    let resumeContent = `
        <h2>Personal Information</h2>
        <h3>Name: Faria Mustaqeem</h3>
        <h3>Father Name: Mustaqeem Ahmed Khan</h3>
        <h3>Gender: Female</h3>
        <h3>Email: zainabmustaqeem123@hotmail.com</h3>
        <h3>Phone Number: 03212012058</h3>

        <h2>Education:</h2>
        <h3>9th grade student of Computer Science</h3>

        <h2>Skills:</h2>
        <ul>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Next.js</li>
        </ul>

        <h2>Work Experience:</h2>
        <h3>Completed the course of Typescript from <b>GIAIC</b></h3>

        <footer>
            <p>&copy; 2024 Faria Mustaqeem</p>
        </footer>
    `;

    // If a profile picture is uploaded, add it above the name
    if (profilePictureUrl) {
        resumeContent = `
            <div>
                <img src="${profilePictureUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">
            </div>
            ${resumeContent}
        `;
    }

    // Display the resume content
    resumeOutput.innerHTML = resumeContent;
});

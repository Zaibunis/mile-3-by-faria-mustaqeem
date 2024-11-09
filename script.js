var _a;
// Function to generate the resume
function generateResume() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate resume content
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <hr />\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume in the output div
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
}
// Add event listener to the button
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateResume);
var generateResumeButton = document.getElementById('generateResume');
var resumeOutput = document.getElementById('resumeOutput');
var profilePictureInput = document.getElementById('profilePicture');
var profilePictureUrl = null;
// Event listener for file input change (file selection)
profilePictureInput.addEventListener('change', function (event) {
    var _a;
    var target = event.target;
    var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the selected file
    if (file) {
        var reader = new FileReader(); // Create a FileReader to read the file
        // On file read success, store the image URL
        reader.onload = function (e) {
            var _a;
            profilePictureUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        // Read the file as a Data URL (base64)
        reader.readAsDataURL(file);
    }
});
// Event listener for the "Generate Resume" button click
generateResumeButton.addEventListener('click', function () {
    var resumeContent = "\n        <h2>Personal Information</h2>\n        <h3>Name: Faria Mustaqeem</h3>\n        <h3>Father Name: Mustaqeem Ahmed Khan</h3>\n        <h3>Gender: Female</h3>\n        <h3>Email: zainabmustaqeem123@hotmail.com</h3>\n        <h3>Phone Number: 03212012058</h3>\n\n        <h2>Education:</h2>\n        <h3>9th grade student of Computer Science</h3>\n\n        <h2>Skills:</h2>\n        <ul>\n            <li>Typescript</li>\n            <li>HTML</li>\n            <li>CSS</li>\n            <li>Next.js</li>\n        </ul>\n\n        <h2>Work Experience:</h2>\n        <h3>Completed the course of Typescript from <b>GIAIC</b></h3>\n\n        <footer>\n            <p>&copy; 2024 Faria Mustaqeem</p>\n        </footer>\n    ";
    // If a profile picture is uploaded, add it above the name
    if (profilePictureUrl) {
        resumeContent = "\n            <div>\n                <img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;\">\n            </div>\n            ").concat(resumeContent, "\n        ");
    }
    // Display the resume content
    resumeOutput.innerHTML = resumeContent;
});

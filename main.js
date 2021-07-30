result_prediction_name = ""
prediction_photo = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F_tDLvsKe/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  } 

  function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_prediction_name").innerHTML = results[0].label;
        document.getElementById("prediction_photo").innerHTML = results[0].confidence.toFixed(3);
    }
}

function how_can_this_work()
{
   window.location.replace('http://127.0.0.1:5500/how.html');
}
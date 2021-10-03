<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['contact']) && isset($_POST['address']) && isset($_POST['country']) && isset($_POST['state']) && isset($_POST['city']) && isset($_POST['zipcode']) && isset($_POST['landmark']) && isset($_POST['Alt_Phone'])){
	$name=($_POST['name']);
	$email=($_POST['email']);
	$contact=($_POST['contact']);
	$address=($_POST['address']);
	$country=($_POST['country']);
	$state=($_POST['state']);
	$city=($_POST['city']);
	$zipcode=($_POST['zipcode']);
	$landmark=($_POST['landmark']);
	$Alt_Phone=($_POST['Alt_Phone']);
	
	$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>EmailId</td><td>$email</td></tr><tr><td>Contact</td><td>$contact</td></tr><tr><td>Address</td><td>$address</td></tr><tr><td>Country</td><td>$country</td></tr><tr><td>State</td><td>$state</td></tr><tr><td>City</td><td>$city</td></tr><tr><td>ZipCode</td><td>$zipcode</td></tr><tr><td>Landmark</td><td>$landmark</td></tr><tr><td>Alt_Phone</td><td>$Alt_Phone</td></tr></table>";
	
	include('./smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="reply8489@gmail.com";
	$mail->Password="Yaduvanshi1920"; 
	$mail->SetFrom("reply8489@gmail.com");
	$mail->addAddress("yadavashishdhirendra@gmail.com"); // Add your Email address To Get form data on your email
	$mail->IsHTML(true);
	$mail->Subject="Enquiry Form";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if($mail->send()){
		//echo "Mail send";
	}else{
		//echo "Error occur";
	}
	echo $Alert;
}
?>

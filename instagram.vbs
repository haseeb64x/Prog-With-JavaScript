' InputBoxes
MsgBox("SUBSCRIBE CYBER GUARDIAN FOR MORE TRICKS: youtube.com/c/cyberguardian")
Message = InputBox("What Is The DM?","CYBER GUARDIAN")
T = InputBox("How Many Times Needs It To Be Send?","CYBER GUARDIAN")
If MsgBox("You've Filled It In Correctly", 1024 + vbSystemModal, "CYBER GUARDIAN") = vbOk Then
Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run("https://www.instagram.com/direct/inbox/")
MsgBox("Now INSTAGRAM DM will be opened select friend to send message and wait: for help you can see Video created by cyber guardian on youtube")
' The Loop For The Messages
WScript.Sleep 3000
For i = 0 to T
WScript.Sleep 5
WshShell.SendKeys Message
WScript.Sleep 5
WshShell.SendKeys "{ENTER}"
Next

' End Of The Script
WScript.Sleep 3000
'WshShell.Run("https://youtu.be/VH71OfIAAgo")
' Cancelled Script
Else
MsgBox "Process Has Been Cancelled", vbSystemModal, "CYBER GUARDIAN"
'WshShell.Run("https://youtu.be/VH71OfIAAgo")
End If
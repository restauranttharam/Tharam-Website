Add-Type -AssemblyName System.Drawing
$photosDir = "c:\Users\postb\Downloads\Tharam.Website-main\src\assets\photos"

Get-ChildItem -Path $photosDir -Filter "*.jpg" | ForEach-Object {
    $file = $_
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    $maxDim = [Math]::Max($img.Width, $img.Height)
    $ratio = 1200.0 / $maxDim
    
    if ($ratio -lt 1.0) {
        $newW = [int]($img.Width * $ratio)
        $newH = [int]($img.Height * $ratio)
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $img.Dispose()
        
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 80L)
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        
        $tmpPath = $file.FullName + ".tmp.jpg"
        $bmp.Save($tmpPath, $codec, $encoderParams)
        $bmp.Dispose()
        $g.Dispose()
        
        Remove-Item -Path $file.FullName -Force
        Move-Item -Path $tmpPath -Destination $file.FullName -Force
        
        $newSize = (Get-Item $file.FullName).Length / 1KB
        Write-Host "Compressed $($file.Name) to $([int]$newSize) KB"
    } else {
        $img.Dispose()
    }
}

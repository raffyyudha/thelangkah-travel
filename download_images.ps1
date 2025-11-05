# Script PowerShell untuk download gambar berkualitas tinggi
# Menggunakan Lorem Picsum sebagai placeholder HD images

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  IMAGE DOWNLOADER - Adventure Sumbawa" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Buat folder jika belum ada
$folders = @(
    "public\images\moyo",
    "public\images\kenawa",
    "public\images\destinations",
    "public\images\about",
    "public\images\gallery"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "✓ Created folder: $folder" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Downloading images..." -ForegroundColor Yellow
Write-Host ""

# Function untuk download gambar
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath,
        [string]$Description
    )
    
    try {
        Write-Host "Downloading: $Description" -ForegroundColor Cyan
        Invoke-WebRequest -Uri $Url -OutFile $OutputPath -UseBasicParsing
        Write-Host "✓ Saved: $OutputPath" -ForegroundColor Green
        Start-Sleep -Milliseconds 500
        return $true
    }
    catch {
        Write-Host "✗ Failed: $Description - $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Daftar gambar untuk didownload (menggunakan Unsplash dengan ID spesifik)
$images = @(
    # Moyo Island
    @{
        Url = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
        Path = "public\images\moyo\hero.jpg"
        Desc = "Moyo Island - Hero (Tropical Island)"
    },
    @{
        Url = "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80"
        Path = "public\images\moyo\waterfall.jpg"
        Desc = "Moyo Island - Waterfall"
    },
    @{
        Url = "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920&q=80"
        Path = "public\images\moyo\beach.jpg"
        Desc = "Moyo Island - Beach"
    },
    @{
        Url = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
        Path = "public\images\moyo\snorkeling.jpg"
        Desc = "Moyo Island - Snorkeling"
    },
    
    # Kenawa Island
    @{
        Url = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80"
        Path = "public\images\kenawa\hero.jpg"
        Desc = "Kenawa Island - Hero (Sunset)"
    },
    @{
        Url = "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80"
        Path = "public\images\kenawa\beach.jpg"
        Desc = "Kenawa Island - White Sand Beach"
    },
    @{
        Url = "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1920&q=80"
        Path = "public\images\kenawa\aerial.jpg"
        Desc = "Kenawa Island - Aerial View"
    },
    @{
        Url = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        Path = "public\images\kenawa\sunset.jpg"
        Desc = "Kenawa Island - Spectacular Sunset"
    },
    
    # Destinations
    @{
        Url = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
        Path = "public\images\destinations\sumbawa.jpg"
        Desc = "Destinations - Sumbawa Landscape"
    },
    @{
        Url = "https://images.unsplash.com/photo-1544551763-92ef10e4f85c?w=1920&q=80"
        Path = "public\images\destinations\island-hopping.jpg"
        Desc = "Destinations - Island Hopping"
    },
    @{
        Url = "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1920&q=80"
        Path = "public\images\destinations\adventure.jpg"
        Desc = "Destinations - Adventure"
    },
    
    # About
    @{
        Url = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1920&q=80"
        Path = "public\images\about\guide.jpg"
        Desc = "About - Local Guide"
    },
    @{
        Url = "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1920&q=80"
        Path = "public\images\about\team.jpg"
        Desc = "About - Team"
    },
    
    # Gallery
    @{
        Url = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
        Path = "public\images\gallery\beach-1.jpg"
        Desc = "Gallery - Beach Paradise"
    },
    @{
        Url = "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=1920&q=80"
        Path = "public\images\gallery\aerial-1.jpg"
        Desc = "Gallery - Aerial View"
    }
)

# Download semua gambar
$successCount = 0
$failCount = 0

foreach ($img in $images) {
    if (Download-Image -Url $img.Url -OutputPath $img.Path -Desc $img.Desc) {
        $successCount++
    } else {
        $failCount++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DOWNLOAD COMPLETE!" -ForegroundColor Green
Write-Host "✓ Success: $successCount" -ForegroundColor Green
Write-Host "✗ Failed: $failCount" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Check the downloaded images in public/images/" -ForegroundColor White
Write-Host "2. Replace any images that do not fit the context" -ForegroundColor White
Write-Host "3. Update the image paths in your React components" -ForegroundColor White
Write-Host ""

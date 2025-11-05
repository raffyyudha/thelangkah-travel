# Simple Image Downloader
Write-Host "Downloading images..." -ForegroundColor Cyan

# Create folders
New-Item -ItemType Directory -Path "public\images\moyo" -Force | Out-Null
New-Item -ItemType Directory -Path "public\images\kenawa" -Force | Out-Null
New-Item -ItemType Directory -Path "public\images\destinations" -Force | Out-Null
New-Item -ItemType Directory -Path "public\images\about" -Force | Out-Null

# Moyo Island Images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80" -OutFile "public\images\moyo\hero.jpg"
Write-Host "Downloaded: Moyo Hero" -ForegroundColor Green

Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=80" -OutFile "public\images\moyo\waterfall.jpg"
Write-Host "Downloaded: Moyo Waterfall" -ForegroundColor Green

Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920&q=80" -OutFile "public\images\moyo\beach.jpg"
Write-Host "Downloaded: Moyo Beach" -ForegroundColor Green

# Kenawa Island Images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80" -OutFile "public\images\kenawa\hero.jpg"
Write-Host "Downloaded: Kenawa Hero" -ForegroundColor Green

Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80" -OutFile "public\images\kenawa\beach.jpg"
Write-Host "Downloaded: Kenawa Beach" -ForegroundColor Green

Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" -OutFile "public\images\kenawa\sunset.jpg"
Write-Host "Downloaded: Kenawa Sunset" -ForegroundColor Green

# Destinations
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80" -OutFile "public\images\destinations\sumbawa.jpg"
Write-Host "Downloaded: Sumbawa Landscape" -ForegroundColor Green

Write-Host ""
Write-Host "All images downloaded successfully!" -ForegroundColor Green

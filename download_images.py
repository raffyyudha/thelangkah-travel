"""
Script untuk mendownload gambar berkualitas tinggi dari Unsplash
Jalankan: python download_images.py
"""

import requests
import os
from pathlib import Path

# Unsplash Access Key (Anda perlu mendaftar di unsplash.com/developers untuk mendapatkan API key gratis)
UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY_HERE"

# Daftar gambar yang perlu didownload
images_to_download = [
    # Moyo Island
    {
        "query": "tropical island indonesia aerial view",
        "path": "public/images/moyo/hero.jpg",
        "orientation": "landscape"
    },
    {
        "query": "waterfall jungle indonesia",
        "path": "public/images/moyo/waterfall.jpg",
        "orientation": "landscape"
    },
    {
        "query": "tropical beach clear water",
        "path": "public/images/moyo/beach.jpg",
        "orientation": "landscape"
    },
    {
        "query": "snorkeling coral reef",
        "path": "public/images/moyo/snorkeling.jpg",
        "orientation": "landscape"
    },
    
    # Kenawa Island
    {
        "query": "small island sunset indonesia",
        "path": "public/images/kenawa/hero.jpg",
        "orientation": "landscape"
    },
    {
        "query": "white sand beach tropical",
        "path": "public/images/kenawa/beach.jpg",
        "orientation": "landscape"
    },
    {
        "query": "small island aerial view",
        "path": "public/images/kenawa/aerial.jpg",
        "orientation": "landscape"
    },
    {
        "query": "spectacular sunset ocean",
        "path": "public/images/kenawa/sunset.jpg",
        "orientation": "landscape"
    },
    
    # Whale Shark (sudah ada, tapi bisa tambah)
    {
        "query": "whale shark swimming",
        "path": "public/images/whale-shark/hero-new.jpg",
        "orientation": "landscape"
    },
    
    # Destinations
    {
        "query": "sumbawa indonesia landscape",
        "path": "public/images/destinations/sumbawa.jpg",
        "orientation": "landscape"
    },
    {
        "query": "island hopping boat indonesia",
        "path": "public/images/destinations/island-hopping.jpg",
        "orientation": "landscape"
    },
    {
        "query": "adventure travel indonesia",
        "path": "public/images/destinations/adventure.jpg",
        "orientation": "landscape"
    },
    
    # About/Team
    {
        "query": "local guide indonesia",
        "path": "public/images/about/guide.jpg",
        "orientation": "portrait"
    },
    {
        "query": "team adventure travel",
        "path": "public/images/about/team.jpg",
        "orientation": "landscape"
    },
    
    # Gallery
    {
        "query": "indonesia beach paradise",
        "path": "public/images/gallery/beach-1.jpg",
        "orientation": "landscape"
    },
    {
        "query": "tropical island drone",
        "path": "public/images/gallery/aerial-1.jpg",
        "orientation": "landscape"
    },
]

def download_image_from_unsplash(query, output_path, orientation="landscape"):
    """Download gambar dari Unsplash berdasarkan query"""
    
    # Buat folder jika belum ada
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    
    # API endpoint
    url = "https://api.unsplash.com/photos/random"
    
    params = {
        "query": query,
        "orientation": orientation,
        "client_id": UNSPLASH_ACCESS_KEY
    }
    
    try:
        print(f"Downloading: {query} -> {output_path}")
        
        # Get random photo
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        photo_data = response.json()
        image_url = photo_data["urls"]["full"]  # Gunakan "full" untuk kualitas terbaik
        
        # Download image
        img_response = requests.get(image_url)
        img_response.raise_for_status()
        
        # Save image
        with open(output_path, 'wb') as f:
            f.write(img_response.content)
        
        print(f"✓ Downloaded: {output_path}")
        return True
        
    except Exception as e:
        print(f"✗ Error downloading {query}: {str(e)}")
        return False

def main():
    print("=" * 60)
    print("UNSPLASH IMAGE DOWNLOADER")
    print("=" * 60)
    print()
    
    if UNSPLASH_ACCESS_KEY == "YOUR_UNSPLASH_ACCESS_KEY_HERE":
        print("⚠️  PERHATIAN!")
        print("Anda perlu mendapatkan Unsplash Access Key terlebih dahulu:")
        print("1. Kunjungi: https://unsplash.com/developers")
        print("2. Daftar/Login")
        print("3. Buat aplikasi baru")
        print("4. Copy Access Key dan paste di script ini")
        print()
        return
    
    success_count = 0
    fail_count = 0
    
    for img_config in images_to_download:
        if download_image_from_unsplash(
            img_config["query"],
            img_config["path"],
            img_config.get("orientation", "landscape")
        ):
            success_count += 1
        else:
            fail_count += 1
    
    print()
    print("=" * 60)
    print(f"SELESAI! ✓ {success_count} berhasil, ✗ {fail_count} gagal")
    print("=" * 60)

if __name__ == "__main__":
    main()

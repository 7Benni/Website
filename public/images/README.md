# Gallery Images

Add your photos here!

## Instructions:

1. **Add your photos** to this folder (`public/images/`)
2. **Name them** as: `photo1.jpg`, `photo2.jpg`, etc. (up to `photo12.jpg`)
3. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
4. **Recommended size**: 800x600px or larger (for best quality)
5. **Commit and push** to GitHub:
   ```powershell
   git add public/images/
   git commit -m "add gallery photos"
   git push origin main
   ```

The gallery will automatically display your photos in the order you name them!

## Edit photo details:

To change photo descriptions or categories, edit `data/gallery.ts`:
- `alt`: Photo description (appears on hover)
- `category`: "landscape", "nature", "aerial", "seascape", "urban", etc.

## Example:

```typescript
{
  id: 1,
  src: "/Website/images/photo1.jpg",
  alt: "My beautiful mountain view",
  category: "landscape"
}
```

That's it! Your photos will appear in the gallery once you push to GitHub. 📸

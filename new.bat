for /R "media\" %%I in (*.png *.jpg *.jpeg) do (
    cwebp.exe "%%I" -o "%%~dpnI.webp" -q 80
    del "%%I"
)
import { Avatar, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";

interface AvatarImageProps {
  preview: string | null,
  setPreview: React.Dispatch<React.SetStateAction<string | null>>
}

const AvatarImage = ({preview, setPreview}:AvatarImageProps) => {
  const [loadingImage, setLoadingImage] = useState(false);
  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setLoadingImage(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setLoadingImage(false);
    } else {
      setPreview(null);
    }
  };
  return ( 
    <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profilePicture"
                type="file"
                onChange={handlePictureChange}
                disabled={loadingImage}
              />
              <label
                aria-disabled={loadingImage}
                htmlFor="profilePicture"
                style={{ textAlign: "center" }}
              >
                {loadingImage ? (
                  <div style={{ width: 100, height: 100, textAlign: "center" }}>
                    {loadingImage && (
                      <CircularProgress style={{ justifyContent: "center" }} />
                    )}
                  </div                  >
                ) : (
                  <Avatar
                    src={preview || undefined}
                    sx={{ width: 100, height: 100, cursor: "pointer" }}
                  />
                )}
              </label>
            </Grid>
   );
}
 
export default AvatarImage;
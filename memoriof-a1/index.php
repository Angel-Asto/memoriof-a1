<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil - Santiago Fabres Nuñez</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
    // Datos del perfil
    $nombre = "Santiago Fabres Nuñez";
    $lugares = [
        "Puerto Varas, Chile - 03/12/1928",
        "Calle Santo Domingo 3949, Santiago, Chile - 02/08/1964"
    ];
    $biografia = "Santiago Fabres Nuñez fue un visionario que llegó a Santiago de Chile el 02/08/1964, buscando nuevas oportunidades y desarrollando iniciativas en el sector empresarial. 
                  Con determinación, fundó negocios que dejaron un legado duradero en su comunidad, mientras inspiraba a generaciones futuras a perseguir sus sueños con valentía y pasión.";
    $fotos = [
        "https://placehold.co/100x100",
        "https://placehold.co/100x100",
        "https://placehold.co/100x100"
    ];
    $videos = ["video1.mp4", "video2.mp4"];
    ?>

    <div class="profile-card">
        <!-- Cabecera del perfil -->
        <div class="profile-header">
            <img src="https://storage.googleapis.com/a1aa/image/J9r2y6gxxNIqFNiH2HrGNHRqm3iuTbhd8Q3DMRcfWaRqjP2JA.jpg" alt="Foto de <?php echo $nombre; ?>">
        </div>

        <!-- Cuerpo del perfil -->
        <div class="profile-body">
            <h2><?php echo $nombre; ?></h2>
            <div class="info">
                <?php foreach ($lugares as $lugar): ?>
                    <p><i class="fas fa-map-marker-alt"></i> <?php echo $lugar; ?></p>
                <?php endforeach; ?>
            </div>
            <div class="share">
                <i class="fas fa-share-alt"></i>
            </div>
        </div>

        <!-- Biografía -->
        <div class="biography">
            <h3>Biografía</h3>
            <p><?php echo nl2br($biografia); ?></p>
        </div>

        <!-- Sección de medios -->
        <div class="media-section">
            <h3>Fotos</h3>
            <div class="photos">
                <?php foreach ($fotos as $foto): ?>
                    <img src="<?php echo $foto; ?>" alt="Foto de <?php echo $nombre; ?>">
                <?php endforeach; ?>
            </div>
            <h3>Videos</h3>
            <div class="videos">
                <?php foreach ($videos as $video): ?>
                    <video controls>
                        <source src="<?php echo $video; ?>" type="video/mp4">
                        Tu navegador no soporta la reproducción de video.
                    </video>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</body>
</html>

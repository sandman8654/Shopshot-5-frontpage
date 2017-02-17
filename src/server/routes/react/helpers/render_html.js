const renderHTML = (componentHTML, initialState) => {
    return `
    <!DOCTYPE html>
      <html lang="en-US" style="height: 100%;">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shopshot</title>
          <link rel="icon" href="/favicon.png">
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
          <link rel="stylesheet" href="/styles.css">
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body style="position: relative; min-height: 100%;">
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
          </script>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
  `;
};

export default renderHTML;
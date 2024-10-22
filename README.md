# Data Visualization
 For social vehicle drivers, construct multiple big data labels to analyze their driving behavior. It is recommended to build a scoring system or other quantitative methods to evaluate and rate the portraits, visualize the results, and achieve visual analysis of the portrait groups.

1. Process experimental data using Python (visible in the "json after process" section of the code).

2. First, work on the driver profiling part. The first step is to set the option, referring to the content on the echart website and making some modifications. The second step is to use `parrellelAxis` to set the names and ranges of the four axes. The third step is to configure the data in the `seris` function, calling the processed JSON file.

3. Next, proceed with the second road condition description experiment. The first step is similar to the previous experiment: set `option2` first. Use `text` to establish the four angles: "Average Speed," "Number in Motion," "Transportation Complexity," and "Direction of Motion." Then, define its radius, starting angle, segment count, and shape. In the important `data` function, use the preprocessed data completed in Python. In the final `return`, use two `div` elements to ensure that both images are output. It is important to note the presence of an empty `legend{}` function above; without it, the three times will not be displayed on the webpage. The `const` function is used for rendering, and the `use effect` below it is for real-time response.

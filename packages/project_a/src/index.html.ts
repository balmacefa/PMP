export const landing_html = /*html*/ `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>CodePen - A Pen by Fabian</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css'>


</head>

<body>



  <div class="container my-5 ">
    <div class="row">
      <div class="col">
        <div class="MD_Editable">
          <h1 class="text-center mb-4 ">1# Project-Scope-Statement</h1>
        </div>
      </div>

    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <!-- Project Justification -->
      <div class="col d-flex">
        <div class="card mb-3 h-100" style="background-color: #f8f9fa;">
          <!-- light card color -->
          <div class="card-header fs-3" style="background-color: #ffc0cb;">2# A. Project Justification</div> <!-- 'rosado' header -->
          <div class="card-body MD_Editable">
            <p class="card-text" style="color: #212529;">It's been a while since I have engaged in new hobbies. I've been looking for finding a new hobby that will allow me to learn a new skill set while enjoying the end product.</p>
          </div>
        </div>
      </div>

      <!-- Project Scope -->
      <div class="col d-flex">
        <div class="card mb-3 h-100" style="background-color: #f8f9fa;">
          <!-- light card color -->
          <div class="card-header fs-3" style="background-color: #ffc0cb;">2# B. Project Scope</div> <!-- 'rosado' header -->
          <div class="card-body">
            <p class="card-text" style="color: #212529;">The boat will be radio controlled, can be sailed in various weather conditions, to be completed with a budget of less than USD 2,000 in 2 months (8 weekends). It will need to be fiberglass laminated for durability and weigh less than 10 kilos for easy transportation. The mast will need to fit in the car. Hydrodynamics of the original IMOCA 60 design will need to be altered to factor in scaling down so will the keel weight as a result of additional volume. <strong>Project Exclusion:</strong> Making the sails. Sails will be bought from a reputable sail maker.</p>
          </div>
        </div>
      </div>

      <!-- Project Deliverables -->
      <div class="col d-flex">
        <div class="card mb-3 h-100" style="background-color: #f8f9fa;">
          <!-- light card color -->
          <div class="card-header fs-3" style="background-color: #ffc0cb;">2# C. Project Deliverables</div> <!-- 'rosado' header -->
          <div class="card-body">
            <p class="card-text" style="color: #212529;">* Completion of the frame * Laminated hull and deck * Painted hull and deck * Rig assembled</p>
          </div>
        </div>
      </div>

      <!-- Project Success Criteria -->
      <div class="col d-flex MD_Editable">
        <div class="card mb-3 h-100" style="background-color: #f8f9fa;">
          <!-- light card color -->
          <div class="card-header fs-3" style="background-color: #ffc0cb;">2# D. Project Success Criteria</div> <!-- 'rosado' header -->
          <div class="card-body">
            <ul class="card-text" style="color: #212529;">
              <li>Finished in less than 8 weekends</li>
              <li>Within the budget of USD 2,000</li>
              <li>Needs to float (!)</li>
              <li>Needs to sail stable</li>
              <li>Radio control needs to operate within 100 metres of distance and for 2 hours without recharge.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>



  <style>
    .business-case {
      background-color: #800000;
      color: white;
    }

    /* Maroon */
    .project-objectives {
      background-color: #daa520;
      color: black;
    }

    /* Goldenrod */
    .major-deliverables,
    .assumptions {
      background-color: #ff8c00;
      color: black;
    }

    /* Dark orange */
    .roles-responsibilities {
      border: 2px solid red;
    }

    .stakeholders {
      background-color: #ffc0cb;
      color: black;
    }

    /* Pink */
    .rounded-box {
      border-radius: 15px;
      padding: 15px;
    }

    .section-header {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .content {
      margin-top: 10px;
    }
  </style>

  <div class="container my-5">
    <h1 class="text-center mb-4">Project Requirements Document</h1>
    <div class="row g-4">
      <!-- Business Case -->
      <div class="col-md-4">
        <div class="rounded-box business-case">
          <div class="section-header">1. Business Case</div>
          <ul class="content">
            <li>A hobby project to occupy my spare time in the weekends and have fun!</li>
          </ul>
        </div>
      </div>

      <!-- Project Objectives -->
      <div class="col-md-4">
        <div class="rounded-box project-objectives">
          <div class="section-header">2. Project Objectives</div>
          <ul class="content">
            <li>Create a radio controlled Imoca 60 replica, can be sailed in sea but also in lakes. It needs to be easy to transport and easy to assemble on the beach.</li>
          </ul>
        </div>
      </div>

      <!-- Major Deliverables -->
      <div class="col-md-4">
        <div class="rounded-box major-deliverables">
          <div class="section-header">3. Major Deliverables</div>
          <ul class="content">
            <li>Completion of the frame</li>
            <li>Laminated hull and deck</li>
            <li>Hull and deck assembled</li>
            <li>Painted</li>
            <li>Rigged</li>
            <li>Assembled</li>
          </ul>
        </div>
      </div>

      <!-- Roles & Responsibilities -->
      <div class="col-md-4">
        <div class="rounded-box roles-responsibilities">
          <div class="section-header">4. Roles & Responsibilities</div>
          <ul class="content">
            <li>Single project manager to carry out all duties. 1 man project management team.</li>
          </ul>
        </div>
      </div>

      <!-- Stakeholders -->
      <div class="col-md-4">
        <div class="rounded-box stakeholders">
          <div class="section-header">5. Stakeholders</div>
          <ul class="content">
            <li>Project Manager – Deniz Sasal</li>
            <li>Project Sponsor – Wifey</li>
            <li>Secondary Stakeholders – Neighbors (noise concern) & Tesla (my dog)</li>
          </ul>
        </div>
      </div>

      <!-- Assumptions -->
      <div class="col-md-4">
        <div class="rounded-box assumptions">
          <div class="section-header">6. Assumptions</div>
          <ul class="content">
            <li>Cost less than USD 2,000 including all materials and the rig.</li>
            <li>Finish in less than 2 months; 8 weekends.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 20px;
      background-color: #f8f8f8;
    }

    .container {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 20px;
    }

    .header {
      background-color: #800000;
      /* Maroon */
      color: white;
      padding: 10px;
      margin: -20px;
      margin-bottom: 20px;
    }

    .header-title {
      margin-left: 20px;
    }

    .content {
      margin-left: 40px;
    }

    .content li {
      margin-bottom: 10px;
    }
  </style>

  <div class="container my-5">
    <div class="header">
      <h2 class="header-title">Business Case</h2>
    </div>
    <div class="content">
      <ul>
        <li>I have been in search for a new fun project. I'd like a project not only fun to build but also enjoy the final product once finished.</li>
        <li>Building an Radio Controlled sailboat that I can sail over the weekends both in lakes and in sea conditions serve that objective.</li>
        <li>In addition, it will equip me with new skills, including; design of hydrodynamics, etc.</li>
        <li>Now, you need to give more details to the business case. Back it with research data if you can. Include interviews, subject matter expert opinions, and data to further justify your business case.</li>
      </ul>
    </div>
  </div>
  <div class="container my-5">
    <div class="header">
      <h2 class="header-title">Business Case</h2>
    </div>
    <div class="content">
      <ul>
        <li>I have been in search for a new fun project. I'd like a project not only fun to build but also enjoy the final product once finished.</li>
        <li>Building an Radio Controlled sailboat that I can sail over the weekends both in lakes and in sea conditions serve that objective.</li>
        <li>In addition, it will equip me with new skills, including; design of hydrodynamics, etc.</li>
        <li>Now, you need to give more details to the business case. Back it with research data if you can. Include interviews, subject matter expert opinions, and data to further justify your business case.</li>
      </ul>
    </div>
  </div>
  <div class="container my-5">
    <div class="header">
      <h2 class="header-title">Business Case</h2>
    </div>
    <div class="content">
      <ul>
        <li>I have been in search for a new fun project. I'd like a project not only fun to build but also enjoy the final product once finished.</li>
        <li>Building an Radio Controlled sailboat that I can sail over the weekends both in lakes and in sea conditions serve that objective.</li>
        <li>In addition, it will equip me with new skills, including; design of hydrodynamics, etc.</li>
        <li>Now, you need to give more details to the business case. Back it with research data if you can. Include interviews, subject matter expert opinions, and data to further justify your business case.</li>
      </ul>
    </div>
  </div>
  <div class="container my-5">
    <div class="header">
      <h2 class="header-title">Business Case</h2>
    </div>
    <div class="content">
      <ul>
        <li>I have been in search for a new fun project. I'd like a project not only fun to build but also enjoy the final product once finished.</li>
        <li>Building an Radio Controlled sailboat that I can sail over the weekends both in lakes and in sea conditions serve that objective.</li>
        <li>In addition, it will equip me with new skills, including; design of hydrodynamics, etc.</li>
        <li>Now, you need to give more details to the business case. Back it with research data if you can. Include interviews, subject matter expert opinions, and data to further justify your business case.</li>
      </ul>
    </div>
  </div>
  <div class="container my-5">
    <div class="header">
      <h2 class="header-title">Business Case</h2>
    </div>
    <div class="content">
      <ul>
        <li>I have been in search for a new fun project. I'd like a project not only fun to build but also enjoy the final product once finished.</li>
        <li>Building an Radio Controlled sailboat that I can sail over the weekends both in lakes and in sea conditions serve that objective.</li>
        <li>In addition, it will equip me with new skills, including; design of hydrodynamics, etc.</li>
        <li>Now, you need to give more details to the business case. Back it with research data if you can. Include interviews, subject matter expert opinions, and data to further justify your business case.</li>
      </ul>
    </div>
  </div>

  <style>
    .wbs-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 10px;
    }

    .wbs-block {
      background-color: #800000;
      color: white;
      padding: 10px;
      border-radius: 5px;
      width: 18%;
    }

    .wbs-block h3 {
      font-size: 1rem;
      text-align: center;
    }

    .wbs-block ul {
      list-style: none;
      padding: 0;
    }

    .wbs-block li {
      background-color: #a0522d;
      margin: 5px 0;
      padding: 5px;
      border-radius: 5px;
      font-size: 0.9rem;
    }

    h1 {
      text-align: center;
      margin: 20px 0;
    }
  </style>


  <div class="container my-5">



    <h1>IMOCA 60 RC WORK BREAKDOWN STRUCTURE</h1>
    <div class="wbs-container">
      <!-- Design -->
      <div class="wbs-block">
        <h3>Design 1.1</h3>
        <ul>
          <li>1.1.1. IMOCA 60 design designed</li>
          <li>1.1.2 Design adjusted</li>
          <li>1.1.3 Final design completed</li>
        </ul>
      </div>
      <!-- Manufacturing -->
      <div class="wbs-block">
        <h3>Manufacturing 1.2</h3>
        <ul>
          <li>1.2.1 Materials designed</li>
          <li>1.2.2 Materials procured</li>
          <li>1.2.3 Frames completed</li>
          <li>1.2.4 Hull and Deck laminated</li>
          <li>1.2.5 Cosmetics (Sanded & Primed)</li>
        </ul>
      </div>
      <!-- Electronics -->
      <div class="wbs-block">
        <h3>Electronics 1.3</h3>
        <ul>
          <li>1.3.1 Components decided and procured</li>
          <li>1.3.2 Components installed</li>
          <li>1.3.3 Components tested</li>
        </ul>
      </div>
      <!-- Rigging -->
      <div class="wbs-block">
        <h3>Rigging 1.4</h3>
        <ul>
          <li>1.4.1 Components decided and procured</li>
          <li>1.4.2 Rig installed</li>
        </ul>
      </div>
      <!-- Testing -->
      <div class="wbs-block">
        <h3>Testing 1.5</h3>
        <ul>
          <li>1.5.1 Electronics tested</li>
          <li>1.5.2 Rig tested</li>
          <li>1.5.3 Pool trial completed</li>
          <li>1.5.4 Sea trial completed</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container my-5">

    <style>
      .gantt-container {
        font-family: Arial, sans-serif;
      }

      .gantt-chart {
        position: relative;
        width: 600px;
        /* Adjust as necessary */
        height: 300px;
        /* Adjust as necessary */
        border-left: 1px solid #000;
        border-top: 1px solid #000;
      }

      .gantt-row {
        position: absolute;
        left: 0;
      }

      .gantt-bar {
        height: 20px;
        background-color: brown;
        margin-top: 5px;
      }

      .time-scale {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 20px;
        border-bottom: 1px solid #000;
        text-align: center;
        font-size: 0.7rem;
      }

      .time-mark {
        display: inline-block;
        width: calc(600px / 35);
        /* 35 units to cover the days */
        border-right: 1px solid #ddd;
        box-sizing: border-box;
      }
    </style>
    <div class="gantt-container">
      <div class="gantt-chart">
        <div class="time-scale">
          <span class="time-mark">27 Jul</span>
          <!-- Repeat for each time period -->
          <span class="time-mark">28 Jul</span>
          <span class="time-mark">29 Jul</span>
          <span class="time-mark">30 Jul</span>
          <span class="time-mark">31 Jul</span>
          <span class="time-mark">01 Aug</span>
          <span class="time-mark">02 Aug</span>
          <span class="time-mark">03 Aug</span>
          <span class="time-mark">04 Aug</span>
          <span class="time-mark">05 Aug</span>
        </div>
        <!-- Task Bars -->
        <div class="gantt-row" style="top: 40px;">
          <div class="gantt-bar" style="width: 100px; left: 50px;"></div> <!-- IMOCA 60 Design Acquired -->
          <div class="gantt-bar" style="width: 200px; left: 200px;"></div> <!-- Materials Procured -->
          <div class="gantt-bar" style="width: 50px; left: 450px;"></div> <!-- Frames Completed -->
        </div>
        <!-- Repeat for each task -->
      </div>
    </div>

  </div>
  </div>

  <div class="container my-5">

    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }
    </style>
    <h2>Stakeholder Register</h2>
    <table>
      <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Role</th>
        <th>Function</th>
        <th>Power</th>
        <th>Influence</th>
        <th>Expectations</th>
        <th>Contact Information</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Deniz Sasal</td>
        <td>Hobbyist (in this case)</td>
        <td>Project Manager</td>
        <td>to be filled</td>
        <td>tbd</td>
        <td>tbd</td>
        <td>tbd</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Wife</td>
        <td>Wife</td>
        <td>Project Sponsor</td>
        <td>tbd</td>
        <td>tbd</td>
        <td>tbd</td>
        <td>tbd</td>
      </tr>
      <!-- Add more rows as needed -->
    </table>
  </div>

  <!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js'></script>


  <script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


  <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>



  <script>
    $(document).ready(function() {
      // Function to destroy the active CKEditor instance and update the original div
      function destroyActiveEditorAndUpdateDiv() {
        if (window.activeCKEditorInstance) {
          var editorContent = window.activeCKEditorInstance.getData();
          var div = $(window.activeCKEditorInstance.element.$);
          div.html(editorContent);
          window.activeCKEditorInstance.destroy();
          window.activeCKEditorInstance = null; // Clean up the reference
        }
      }

      // Function to initialize CKEditor on an element
      function createEditor(element) {
        // Check and destroy any existing editors
        destroyActiveEditorAndUpdateDiv();

        // Create CKEditor
        CKEDITOR.replace(element, {
          on: {
            instanceReady: function(ev) {
              // Store reference to the active CKEditor instance
              window.activeCKEditorInstance = ev.editor;
            },
            blur: function(e) {
              // On blur, destroy the editor (this will also update the original div)
              destroyActiveEditorAndUpdateDiv();
            }
          }
        });
      }

      // Detect click on elements with the class 'MD_Editable'
      $('.MD_Editable').on('click', function(e) {
        e.stopPropagation(); // Prevent click from propagating to the document

        // Ensure the clicked element is eligible for CKEditor replacement
        if (!CKEDITOR.instances[this.id]) {
          createEditor(this); // Initialize CKEditor on the clicked element
        }
      });

      // Detect document click to destroy active CKEditor and update the div
      $(document).on('click', function(e) {
        destroyActiveEditorAndUpdateDiv();
      });

      // Prevent document click from being triggered when clicking inside the editor or on the editable element
      $(document).on('click', '.cke, .MD_Editable', function(e) {
        e.stopPropagation();
      });
    });
  </script>




  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Responsive Draggable Blocks</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <style>
      #wbs-container-wrapper {
        width: 100%;
        overflow-x: auto;
        border: 2px solid #ccc;
        padding: 10px;
        background-color: #f0f0f0;
      }

      .wbs-container {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        padding: 10px;
        overflow-x: auto;
      }

      .wbs-block {
        flex: 0 0 auto;
        margin: 5px;
        background-color: #800000;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: grab;
        width: 200px;
      }

      .wbs-block h3 {
        font-size: 1rem;
        text-align: center;
      }

      .wbs-block ul {
        list-style: none;
        padding: 0;
      }

      .wbs-block li {
        background-color: #a0522d;
        margin: 5px 0;
        padding: 5px;
        border-radius: 5px;
        font-size: 0.9rem;
      }

      h1 {
        text-align: center;
        color: #333;
      }
    </style>
  </head>

  <body>

    <div id="wbs-container-wrapper">
      <div class="wbs-section">
        <h1>IMOCA 60 RC WORK BREAKDOWN STRUCTURE</h1>
        <style>
          .wbs-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 10px;
            padding: 10px;
            overflow-x: auto;
            resize: horizontal;
            /* Added property for horizontal resizing */
          }

          /* Rest of the CSS code */
        </style>
        <!-- Example Block -->
        <div class="wbs-block" id="designBlock">
          <h3>Design 1.1</h3>
          <ul>
            <li>1.1.1. IMOCA 60 design concept</li>
            <li>1.1.2. Preliminary sketches</li>
            <li>1.1.3. Finalized design</li>
          </ul>
        </div>
        <!-- More blocks can be added here -->
        <div class="wbs-block" id="manufacturingBlock">
          <h3>Manufacturing 1.2</h3>
          <ul>
            <li>1.2.1. Frame construction</li>
            <li>1.2.2. Hull and deck fabrication</li>
            <li>1.2.3. Assembly</li>
          </ul>
        </div>
        <div class="wbs-block" id="electronicsBlock">
          <h3>Electronics 1.3</h3>
          <ul>
            <li>1.3.1. Component selection</li>
            <li>1.3.2. Wiring and installation</li>
            <li>1.3.3. Testing</li>
          </ul>
        </div>
        <div class="wbs-block" id="riggingBlock">
          <h3>Rigging 1.4</h3>
          <ul>
            <li>1.4.1. Mast and sail selection</li>
            <li>1.4.2. Rigging installation</li>
          </ul>
        </div>
        <div class="wbs-block" id="testingBlock">
          <h3>Testing 1.5</h3>
          <ul>
            <li>1.5.1. Electronics testing</li>
            <li>1.5.2. Sea trials</li>
            <li>1.5.3. Final adjustments</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script>
      // Define your breakpoints
      const breakpoints = {
        xs: 0,
        xs2: 375,
        sm: 576,
        sm2: 600,
        md: 768,
        md2: 992,
        lg: 992,
        lg2: 1200,
        xl: 1200,
        xl2: 1400,
        xl3: 1600,
        xl4: 1800,
        xl5: 2000

      };

      function getCurrentBreakpoint() {
        const w = $(window).width();
        let currentBreakpoint = 'xs';
        for (const [breakpoint, width] of Object.entries(breakpoints)) {
          if (w >= width) {
            currentBreakpoint = breakpoint;
          } else {
            break;
          }
        }
        return currentBreakpoint;
      }

      $(function() {
        $(".wbs-block").draggable({
          containment: "parent",
          grid: [50, 50],
          stop: function(event, ui) {
            const id = $(this).attr("id");
            const breakpoint = getCurrentBreakpoint();
            $(this).data('pos-' + breakpoint, {
              x: ui.position.left,
              y: ui.position.top
            });
          }
        });

        function restorePositions() {
          const breakpoint = getCurrentBreakpoint();
          $(".wbs-block").each(function() {
            const id = $(this).attr("id");
            const pos = $(this).data('pos-' + breakpoint);
            if (pos !== undefined) {
              $(this).css({
                left: pos.x + 'px',
                top: pos.y + 'px'
              });
            }
          });
        }

        restorePositions();

        $(window).on('resize', function() {
          restorePositions();
        });
      });
    </script>

  </body>

  </html>



  <!doctype html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery UI Draggable - Constrain movement</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <style>
      .draggable {
        width: 90px;
        height: 90px;
        padding: 0.5em;
        float: left;
        margin: 0 10px 10px 0;
      }

      #draggable,
      #draggable2 {
        margin-bottom: 20px;
      }

      #draggable {
        cursor: n-resize;
      }

      #draggable2 {
        cursor: e-resize;
      }

      #containment-wrapper {
        width: 95%;
        height: 150px;
        border: 2px solid #ccc;
        padding: 10px;
      }

      h3 {
        clear: left;
      }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <script>
      $(function() {
        $("#draggable").draggable({
          axis: "y"
        });
        $("#draggable2").draggable({
          axis: "x"
        });

        $("#draggable3").draggable({
          containment: "#containment-wrapper",
          scroll: false
        });
        $("#draggable4").draggable({
          containment: "parent"
        });
      });
    </script>
  </head>

  <body>

    <h3>Constrain movement along an axis:</h3>

    <div id="draggable" class="draggable ui-widget-content">
      <p>I can be dragged only vertically</p>
    </div>

    <div id="draggable2" class="draggable ui-widget-content">
      <p>I can be dragged only horizontally</p>
    </div>

    <h3>Or to within another DOM element:</h3>
    <div id="containment-wrapper">
      <div id="draggable3" class="draggable ui-widget-content">
        <p>I&apos;m contained within the box</p>
      </div>

      <div class="draggable ui-widget-content">
        <p id="draggable4" class="ui-widget-header">I&apos;m contained within my parent</p>
      </div>
    </div>


  </body>

  </html>



  <!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <title>CKEditor</title>
    <script src="https://cdn.ckeditor.com/ckeditor5/41.2.1/classic/ckeditor.js"></script>
  </head>

  <body>
    <div id="editor">This is some sample content.</div>
    <script>
      ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
          console.log(editor);
        })
        .catch(error => {
          console.error(error);
        });
    </script>
  </body>

  </html>




</body>

</html>`;
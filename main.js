function toggleNav() {
                const sidebar = document.getElementById("sidebar");
                if (sidebar.style.width === "100%") {
                    sidebar.style.width = "0";
                    main.style.marginLeft = "0";
                } else {
                    sidebar.style.width = "100%";
                    main.style.marginLeft = "100%";
                }
            }

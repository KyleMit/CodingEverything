# Jupyter Notebooks


[Jupyter Lab Docs](https://jupyterlab.readthedocs.io/)

## Getting Started

### Install Python

[Python Download](https://www.python.org/downloads/)

### Install Jupyter

```bash
pip install jupyterlab
pip install notebook
```

### Start Jupyter Lab

[Starting JupyterLab](https://jupyterlab.readthedocs.io/en/latest/getting_started/starting.html)

```bash
jupyter lab
```

[Running JupyterLab as a Desktop Application in Windows 10](https://stackoverflow.com/q/51036132/1366033)

```bash
jupyter lab --generate-config
code %UserProfile%\.jupyter\jupyter_notebook_config.py
```

```py file:jupyter_notebook_config.py
c.NotebookApp.browser = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe --app=%s"
```

## VS Code

* [Working with Jupyter Notebooks in Visual Studio Code](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)
  * [Debug Cell](https://code.visualstudio.com/docs/datascience/jupyter-notebooks#_debug-cell)



require_recipe "apt"
require_recipe "python::source"
include_recipe "python::pip"
include_recipe "python::virtualenv"

package "unzip"
package "python-dev"
package "mc"

python_pip "PIL" do
  action :install
end

python_pip "ipdb" do
  action :install
end

gae_dir = "google_appengine"
gae_zip = "#{gae_dir}_1.7.3.zip"

execute "download #{gae_zip}" do
  user "vagrant"
  cwd "/home/vagrant"
  command "wget http://googleappengine.googlecode.com/files/#{gae_zip}"
  not_if "test -e #{gae_zip}"
end

execute "unzip #{gae_zip}" do
  user "vagrant"
  cwd "/home/vagrant"
  command "unzip #{gae_zip}"
  not_if "test -e #{gae_dir}"
end

#execute "move gae sdk to user home dir" do
#  user "vagrant"
#  cwd "/home/vagrant"
#  command "mv #{gae_dir} ~/"
#  not_if "test -e ~/#{gae_dir}"
#end

# update bash profile to include reference to app engine sdk
cookbook_file "/home/vagrant/.bashrc" do
  source "bashrc"
  mode "0644"
end
